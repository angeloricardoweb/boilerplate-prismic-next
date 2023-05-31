export type StaffType = {
  id: string
  nome: string
  cpf: string
  rg: string
  celular: string
  ativo: boolean
}

export interface IStaffStore {
  staffs: StaffType[]
  setStaffs: (staffs: StaffType[]) => void
}

export type PixPaymentDTO = {
  codigo_pix: string
  valor: number
  protocolo: string
}
