import { CreateUserFormData} from "../components/credentials/RegisterPage";

interface DataProps {
  email: String,
  name: String
  lastname: String,
  password: String,
  id: String,
  createdAt: String,
  birthday: String,
}

export const createNewUser = async({email, name, lastname, password}:CreateUserFormData) => {


  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const newUser: DataProps[] = []
  const date = new Date().toISOString().split('T')[0]

  await fetch('http://localhost:3000/users')
  .then(users => users.json())
  .then(async users => {
    const user = users.find((user: DataProps) => user.email === email)
    if(user){
      console.log('Já Existe um Usuário Com este email')
    } else {
      newUser.push({
        'id': generateUUID(),
        'name': name,
        'lastname': lastname,
        'email': email,
        'password': password,
        'createdAt': date,
        'birthday': date,
      })
      
      try {
        const postUser = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser[0])
        })
        if(!postUser.ok){
          throw new Error('Erro ao adicionar usuário')
        } else {
          return("Criado Com Sucesso")
        }
      } catch (error) {
        console.log(error)
      }

    }
  })
}
