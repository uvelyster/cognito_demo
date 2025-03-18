import { Amplify } from "aws-amplify";
import config from '../config.json'
import { signIn } from '@aws-amplify/auth'
// import { configureAutoTrack } from "aws-amplify/analytics";


Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: config.amplify.userPoolId,
            userPoolClientId: config.amplify.userPoolClientId
        }
    }
})

async function logIn(userName: string, password: string){
    const signInResult = await signIn ({
        username: userName,
        password: password
    })
    return signInResult;
}

async function main() {
    const result = await logIn (
        config.credentials.username,
        config.credentials.password
    )
    console.log('login result:')
    console.log(result)
}

export async function test(element: HTMLButtonElement){
    element.addEventListener('click', () => main())
}
