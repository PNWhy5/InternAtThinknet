import { JOBTYPE, GENDER } from '../constants'

const user = (data) => {
  if (!data) return data
  const result = {
    ...data,
    gender: GENDER.MALE,
    job: JOBTYPE.PROGRAMMER,
  }

  return result
}

export default {
  user,
}
