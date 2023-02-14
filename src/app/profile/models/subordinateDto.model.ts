
import { Subordinate } from './subordinate.model';

export interface SubordinateDto {
  code: number,
  data: Subordinate[],
  message:string
}
