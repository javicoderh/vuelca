readAll: publicProcedure
    .input(
      z
        .object({
          searchColumn: z.string().optional(),
          searchValue: z.string().optional(),
          page: z.number().optional(),
          limit: z.number().optional(),
        })
        .optional()
    )
    .query(async (opts) => {
      try {
        if (opts.input?.page && opts.input?.limit) {
          const page = opts.input.page;
          const limit = opts.input.limit;
          const offset = (page - 1) * limit;
          let users;
          let usersCount;
          const whereConditions: Prisma.UserWhereInput[] = [];

          if (opts.input.searchValue && opts.input.searchColumn) {
            const whereCondition: Prisma.UserWhereInput = {};

            switch (opts.input.searchColumn) {
              case "name":
                whereCondition.name = {
                  contains: opts.input.searchValue,
                };
                break;
              case "email":
                whereCondition.email = {
                  contains: opts.input.searchValue,
                };
                break;
              case "role":
                whereCondition.role = {
                  name: { contains: opts.input.searchValue },
                };
                break;
              default:
                whereCondition.name = {
                  contains: opts.input.searchValue,
                };
                break;
            }

            whereConditions.push(whereCondition);
          }

          users = await prisma.user.findMany({
            where: {
              OR: whereConditions.length > 0 ? whereConditions : undefined,
            },
            skip: offset,
            take: limit,
            include: {
              role: true,
            },
            orderBy: {
              createdAt: "desc",
            },
          });

          if (opts.input.searchValue && opts.input.searchColumn) {
            usersCount = await prisma.user.count({
              where: {
                OR: whereConditions.length > 0 ? whereConditions : undefined,
              },
            });
          } else {
            usersCount = await prisma.user.count();
          }

          const totalPages = Math.ceil(usersCount / limit);
          return {
            users: users,
            totalPages: totalPages,
          };
        }

        const users = await prisma.user.findMany({
          orderBy: {
            createdAt: "desc",
          },
          include: {
            role: true,
          },
        });

        return {
          users: users,
        };
      } catch (error) {
        ThrowError(error, "INTERNAL_SERVER_ERROR", "Failed to fetch users");
      }
    }),