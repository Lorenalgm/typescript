import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'lorena@proesc.com',
        password: '123456',
        techs: [ 
            'Node',
            { title: 'React', experience: 100 }
        ],
    });

    return response.json({ message: 'Hello World '});
}