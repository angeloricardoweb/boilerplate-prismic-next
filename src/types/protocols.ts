export type Me = {
  id: number
  name: string
  email: string
  profile_photo_url: string
  created_at: string
  updated_at: string
}

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
