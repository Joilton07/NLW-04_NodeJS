import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";


class SurveysController {
    

    async create(request: Request, response: Response){
        const {title, description} = request.body;

        const surveysRepoository = getCustomRepository(SurveysRepository);
        
        const survey = surveysRepoository.create({
            title,
            description
        });

        await surveysRepoository.save(survey);

        return response.status(201).json(survey);
    }

    async show(request: Request, response: Response) {
        const surveysRepoository = getCustomRepository(SurveysRepository);

        const all = await surveysRepoository.find();

        return response.json(all);
    }
}

export { SurveysController };