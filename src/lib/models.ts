import { number, z } from "zod";
import { Decimal as DecimalPackage } from "decimal.js";

const String = z.string();
const Int = z.coerce.number().int();
const BigInt = z.coerce.bigint();
const Float = z.coerce.number();
const Boolean = z.boolean();
const DateTime = z.coerce.date();
const Decimal = z.custom<DecimalPackage>((val) => {
  if (val instanceof DecimalPackage) {
    return { success: true, data: val };
  } else {
    return { success: false, error: "Not a decimal" };
  }
});

export const UserSchema = z.object({
  id: String,
  name: String.nullable(),
  email: String.nullable(),
  emailVerified: DateTime.nullable(),
  image: String.nullable(),
  roleId: Int,
});

export const MarzoEventosSchema = z.object({
  id:   Int,
  nombre:  String,
  fecha: Int,
  descripcion: String,
  categoria: String,
  contacto: String,
  ruta: String,
  imagen1: String,
  eslogan: String,
  mes: String,
})

export const UserRoleSchema = z.object({
  id: Int,
  name: String,
});
