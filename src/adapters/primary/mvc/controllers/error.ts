import { Request, Response } from 'express'

export const get404 = (req: Request, res: Response): void => {
  res.status(404).render('errors/404', { pageTitle: 'Page Not Found', path: '/404' })
}
