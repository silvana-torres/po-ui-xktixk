import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public gerarCNH(cCNH: string): void {
    alert('teste' + cCNH);
    // console.log('cCNH', cCNH);
    let nI = 0,
      nVL = 0,
      nM1 = 9,
      nM2 = 1;

    let nDV1 = 0,
      nDV2 = 0;

    let lMaior = false;

    // Calculo dos valores dos dígitos baseado
    // no fator multiplicativo de acordo com a posição
    // de cada dígito.

    for (let nI = 1; nI <= 9; nI++) {
      nVL = parseInt(cCNH.substring(nI, 1));
      nDV1 = nVL * nM1;
      nDV2 = nVL * nM2;
      nM1--;
      nM2++;
    }

    // Determina o primeiro dígito verificador
    nDV1 = nDV1 % 11;

    if (nDV1 > 9) {
      nDV1 = 0;
      lMaior = true;
    }

    // Determina o segundo dígito verificador
    nDV2 = nDV2 % 11;

    if (lMaior) {
      // Regra diferenciada para caso o módulo 11
      // do primeiro dígito verificador seja maior que 9
      if (nDV2 - 2 < 0) {
        nDV2 += 9;
      } else if (nDV2 - 2 >= 0) {
        nDV2 -= 2;
      }
    }

    // Ajuste final
    if (nDV2 > 9) {
      nDV2 = 0;
    }

    // // Retorna os dígitos calculados como string
    // console.log(nDV1, nDV2);
    alert(cCNH + nDV1 + nDV2);
    // return nDV1 + nDV2;
  }
}
