import { throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';

import { RespostaApiModel } from './resposta-api.model';

export function mapearRespostaErroApi(respostaErro: HttpErrorResponse) {
  const obj = respostaErro.error as RespostaApiModel;

  return throwError(() => obj.erros?.join('. '));
}
