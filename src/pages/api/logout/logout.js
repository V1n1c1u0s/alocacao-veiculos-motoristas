import { deleteCookie } from 'cookies-next';

export function LogOut(){
  deleteCookie('authorization')
}
