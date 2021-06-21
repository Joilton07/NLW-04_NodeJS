import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController {
    
    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        if (!surveyUser) {
            throw new AppError("Survey Users does not exists!");
            // return response.status(400).json({
            //     error: "Survey Users does not exists!"
            // })
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);

     }
}

export { AnswerController }

// http://localhost:3333/answers/1?u=3e717220-e150-4b56-a570-576553d97829
    /**
     * Routes Params => Parametros que compõe a rota
     * routes.get("/answers/:value")
     * 
     * Query Params => Busca, Paginação , não obrigatórios
     * ?
     * chava=valor
     */