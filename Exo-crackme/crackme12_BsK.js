/* Algorithme de cryptage Intermédiaire */

// => Débogage en partant de la fin

let password = ''

const crackme12 = (password) => {
  password.split('').reverse().join('')
  if (password[13] === 'r') {
    if (password[12] === 'o') {
      if (password[11] === 's') {
        if (password[10] === 'o') {
          if (password[9].charCodeAt() === 110) {
            if (password[8].charCodeAt() === 111) {
              if (password[7].charCodeAt() === 100) {
                if (password[6].charCodeAt() === 111) {
                  if (password[5].charCodeAt() === 104) {
                    if (password[4].charCodeAt() === 99) {
                      if (password[3] === 'u' && password[1] === 'a' && password.length === 14 && password[2] === 'b' && password[0] === 'N') {
                        console.log('OK')
                      }
                      else {
                        console.log('BAD1')
                      }
                    }
                    else {
                      console.log('BAD2')
                    }
                  }
                  else {
                    console.log('BAD3')
                  }
                }
                else {
                  console.log('BAD4')
                }
              }
              else {
                console.log('BAD5')
              }
            }
            else {
              console.log('BAD6')
            }
          }
          else {
            console.log('BAD7')
          }
        }
        else {
          console.log('BAD8')
        }
      }
      else {
        console.log('BAD9')
      }
    }
    else {
      console.log('BAD10')
    }
  }
  else {
    console.log('BAD11')
  }
}
crackme12(password)