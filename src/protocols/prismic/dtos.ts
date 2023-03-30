interface IImg {
  alt?: string
  url: string
  dimensions: {
    width: number
    height: number
  }
}

export interface BannerDTO {
  banner: IImg
  link?: string
}

export interface AboutUsDTO {
  descricao: string
  banner: IImg
}

export interface ServiceDTO {
  data: {
    titulo: string
    banner: IImg
    conteudo: any
  }
  id: string
  slugs: string[]
  last_publication_date: string
}
