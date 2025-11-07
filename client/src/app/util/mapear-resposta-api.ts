import { RespostaApiModel } from './resposta-api.model';

export function mapearRespostaApi<T>(resposta: RespostaApiModel): T {
  if (!resposta.sucesso && resposta.erros) throw new Error(resposta.erros.join('. '));

  return resposta.dados as T;
}
