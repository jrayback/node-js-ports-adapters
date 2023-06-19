import { Request, Response } from 'express'

export const get404 = (req: Request, res: Response): void => {
  res.status(404).render('404', {
    pageTitle: 'Page not found...',
    path: '/error'
  })
}
