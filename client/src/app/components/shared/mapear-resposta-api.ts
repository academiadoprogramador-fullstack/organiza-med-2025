import { throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';

import { RespostaApiModel } from './resposta-api.model';

export function mapearRespostaApi<T>(resposta: RespostaApiModel): T {
  if (!resposta.sucesso && resposta.erros) throw new Error(resposta.erros.join('. '));

  return resposta.dados as T;
}

export function mapearErrosApi(respostaErro: HttpErrorResponse) {
  const obj = respostaErro.error as RespostaApiModel;

  return throwError(() => obj.erros?.join('. '));
}
