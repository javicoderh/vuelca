import { AbrilRouter } from "./routers/abril";
import { agostoRouter } from "./routers/agosto";
import { diciembreRouter } from "./routers/diciembre";
import { empresasSaludRouter } from "./routers/empresasSalud";
import { eneroRouter } from "./routers/enero";
import { febreroRouter } from "./routers/febrero";
import { julioRouter } from "./routers/julio";
import { junioRouter } from "./routers/junio";
import { marzoRouter } from "./routers/marzo";
import { mayoRouter } from "./routers/mayo";
import { noviembreRouter } from "./routers/noviembre";
import { octubreRouter } from "./routers/octubre";
import { productosSaludRouter } from "./routers/productosSalud";
import { septiembreRouter } from "./routers/septiembre";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => "Hello from tRPC"),
  marzo: marzoRouter,
  enero: eneroRouter,
  febrero: febreroRouter,
  abril: AbrilRouter,
  mayo: mayoRouter,
  junio: junioRouter,
  julio: julioRouter,
  agosto: agostoRouter,
  septiembre: septiembreRouter,
  octubre: octubreRouter,
  noviembre: noviembreRouter,
  diciembre: diciembreRouter,
  empresasSalud: empresasSaludRouter,
  productosSalud: productosSaludRouter
});

export type AppRouter = typeof appRouter;
