import { IsNotEmpty, IsNumber } from "class-validator";
import{Transform} from "class-transformer"
export class TemperatureDto{
    @IsNotEmpty()
    dari: string

    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    nilai: number

    @IsNotEmpty()
    ke: string
}