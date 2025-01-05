import "./style.css";
import { isValidIBAN } from "ibantools";
import { bancos, Banco } from "./model";

const ibanInput = document.getElementById("iban-input") as HTMLTextAreaElement;
const botonDeValidar = document.getElementById("validate-button") as HTMLButtonElement;
const isIBANBienFormado = document.getElementById("iban-formed") as HTMLSpanElement;
const isIBANValido = document.getElementById("iban-valid") as HTMLSpanElement;
const codigoDelBanco = document.getElementById("bank-code") as HTMLSpanElement;
const codigoSucursal = document.getElementById("branch-code") as HTMLSpanElement;
const codigoDeControl = document.getElementById("control-digit") as HTMLSpanElement;
const numeroDeCuenta = document.getElementById("account-number") as HTMLSpanElement;

botonDeValidar.addEventListener("click", validarYProcesarIBAN);

const ibanRegex = /^([A-Z]{2})(\d{2})(\d{4})(\d{4})(\d{2})(\d{10})$/;

function buscarBanco(codigo: string): string {
  const banco = bancos.find((banco: Banco) => banco.codigo === codigo);
  // si encuentra el nombre del banco, lo devuelve, si no, devuelve "Desconocido"
  return banco ? banco.nombre : "Desconocido";
}

function validarYProcesarIBAN() {
  const inputIBAN = ibanInput.value.trim()
  // aquitamos los espacios y o los guiones
  const ibanSinEspacios = inputIBAN.replace(/[\s-]/g, "")
  const match = ibanSinEspacios.match(ibanRegex)

  // si no encuentra el IBAN, muestra un mensaje de error
  if (!match) {
    isIBANBienFormado.textContent = "false"
    isIBANValido.textContent = "false"
    codigoDelBanco.textContent = "-"
    codigoSucursal.textContent = "-"
    codigoDeControl.textContent = "-"
    numeroDeCuenta.textContent = "-"
    alert("El IBAN no está bien formado. Por favor, verifica tu entrada.")
    return
  }

  // si encuentra el IBAN, muestra los datos
  isIBANBienFormado.textContent = "true"

  const esValido = isValidIBAN(ibanSinEspacios)
  isIBANValido.textContent = esValido ? "true" : "false"
  if (!esValido) {
    alert("El IBAN no es válido.")
  }

  const codigoBanco = match[3]
  const nombreBanco = buscarBanco(codigoBanco)

  codigoDelBanco.textContent = `${codigoBanco} - ${nombreBanco}`
  codigoSucursal.textContent = match[4]
  codigoDeControl.textContent = match[5]
  numeroDeCuenta.textContent = match[6]
}

