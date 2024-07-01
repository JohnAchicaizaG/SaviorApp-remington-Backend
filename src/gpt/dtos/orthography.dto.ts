import { IsInt, IsOptional, IsString } from "class-validator";

export class OrthographyDto {
    @IsString()
    readonly prompt: any;

    @IsInt()
    @IsOptional()
    readonly maxTokens?: number;

}

interface PromptObject {
    FechaNacimiento: string;
    Ubicacion: string | null;
    NumeroIdentificacion: string;
    PrimerNombre: string;
    SegundoNombre: string;
    PrimerApellido: string;
    SegundoApellido: string;
    Edad: number;
    Genero: string;
    PreguntaUno: string;
    PreguntaDos: string;
    PreguntaTres: string;
    PreguntaCuatro: string;
    PreguntaCinco: string;
    PreguntaSeis: string;
    PreguntaSiete: string;
    PreguntaOcho: string;
    PreguntaNueve: string;
    PreguntaDiez: string;
    PreguntaOnce: string;
  }