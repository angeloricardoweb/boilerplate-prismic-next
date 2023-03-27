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

