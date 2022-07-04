/* @flow */
import dotenv from 'dotenv'

dotenv.config()

export const {
  NODE_PORT,
  NODE_ENV,
  APP_ENV,
  //URL_PREFIX,
  //URL_BLOG_SERVICE,
  URL_Users_SERVICE,
  URL_Movies_SERVICE,
  URL_Bookings_SERVICE,
  URL_Theaters_SERVICE,
  URL_Showtimes_SERVICE,
  URL_Reserved_seats_SERVICE,
} = process.env
