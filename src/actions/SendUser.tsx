import {User} from '../types/interfaces';


const sendUser = async (url: string , data: User ) => {
  const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
  }); return await response.json();
    
}
export {sendUser}