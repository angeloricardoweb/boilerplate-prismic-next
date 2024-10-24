import useLang from './useLang'
import { langData } from '@/location/langData'

export default function useNavLinks() {
  const { stringData } = useLang()

  const navLinks = [
    {
      route: '/',
      name: stringData(langData.Home),
    },
    {
      route: '/sobre-nos',
      name: stringData(langData.About),
    },
    {
      route: '/blog',
      name: stringData(langData.Blog),
    },
    {
      route: '/contatos',
      name: stringData(langData.ContactUs),
    },
    {
      route: '/servicos',
      name: stringData(langData.Services),
      dinamic_submenu_document_type: 'servico', // your document needs to have a field called "titulo"
    },
    {
      route: '/submenu',
      name: stringData(langData.Submenu),
      submenu: [
        {
          label: 'Submenu 1',
          href: '/submenu/submenu1',
        },
        {
          label: 'Submenu 2',
          href: '/submenu/submenu2',
        },
      ],
    },
  ]

  return {
    navLinks,
  }
}
