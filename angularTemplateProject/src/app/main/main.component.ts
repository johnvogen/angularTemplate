import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
//import { coreClass } from '../coreClass';  //example of how to import an external class
import { InputService } from '../input.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  inputs = {
    input_claims_ytdDental: 1000,
    input_claims_ytdMedical: 2000,
    input_claims_ytdRx: 3000,
    input_matchjob_AsOfDate: "2018-06-15",
    input_matchjob_CompLimited: 224010,
    input_matchjob_ContShortfall: 500,
    input_matchjob_ProjTotalComp: 224010,
    input_matchjob_ProjTotEE: 6816.36,
    input_matchjob_ytdEECont: 3448.8,
    input_matchjob_CompanyMatch: 6816,
    input_matchjob_ytdBaseSalary: 67350,
    input_matchjob_ytdIncentive: 0,
    input_matchjob_InactiveComp: 135,
    input_matchjob_Bonus: 89175,
    input_matchjob_W2: 0,
    input_tba_Age50EOY: "Y",
    input_tba_Age55EOY: "Y",
    input_tba_Birthdate: "1966-07-01",
    input_tba_BPC: "US",
    input_tba_DCFSA: 1004,
    input_tba_EEID: "000099999",
    input_tba_FName: "Joseph",
    input_tba_HardshipDate: "2018-11-01",
    input_tba_HCFSA: 2000,
    input_tba_HCFSA_auto: "Yes",
    input_tba_HSA_EE: 3000,
    input_tba_HSA_TOTAL: 4000,
    input_tba_LName: "Butler",
    input_tba_LtdPurpose: "Y",
    input_tba_MatchElig: "Y",
    input_tba_MatchEligDate: "2018-07-15",
    input_tba_MatchEligYAN: "N",
    input_tba_MedCov: "Cigna CDHP Medical Rx",
    input_tba_MedCovTier: "Individual > 2 Child(ren)",
    input_tba_MedOptID: 3571,
    input_tba_MedTierID: 25,
    input_tba_NewHireFlag: "N",
    input_tba_OptLifeCovAmt: 25000,
    input_tba_PRSN_ID: "000099999",
    input_tba_PrsnIntnId: "000099999",
    input_tba_RetAftTaxCatchPct: 0,
    input_tba_RetAftTaxPct: 0,
    input_tba_RetBonusAmt: 1500,
    input_tba_RetBonusPct: 5,
    input_tba_RetBonusSource: "ROTH",
    input_tba_RetPreTaxCatchPct: 0,
    input_tba_RetPreTaxCatchAmt: 500,
    input_tba_RetPreTaxPct: 0,
    input_tba_SpLifeCovAmt: 50000,
    input_tba_StateCode: "NJ",
    input_tba_SummerBonus: "N",
    input_tba_YTDcontEE: 3400,
    input_tba_YTDcontER: 3400,
    input_ysa_DCFSAbal: 3333,
    input_ysa_HCFSAbal: 777,
    input_TaxRate: 0.25,
    input_global_SingleHSA: 3450,
    input_global_FamilyHSA: 6900,
    input_global_HSACatchup: 1000,
    input_global_DCFSA: 5000,
    input_global_HCFSA: 2650,
    input_global_LtdPurpHCFSA: 2650,
    input_global_DCLimit: 18500,
    input_global_401kCatchup: 6000,
    input_global_AEstart: "2018-10-10",
    input_global_AEend: "2018-11-01",
    input_global_TaxBracket1: 9525,
    input_global_TaxBracket2: 38700,
    input_global_TaxBracket3: 82500,
    input_global_TaxBracket4: 157500,
    input_global_TaxBracket5: 200000,
    input_global_TaxBracket6: 500000,
    input_global_DCLimitYEAR: "2018",
    input_global_TestDate: "2018-10-01"
  };
  outputs = {};

  //example of how to instantiate an external class for specialized purpose
  //core = new coreClass(34, "universe", null, 7, 8);

  constructor(private inputService: InputService) { //dependency injection
  }

  ngOnInit() {

  }

  call(): void {
    $('#loader').fadeIn();
    var input: string = JSON.stringify(this.inputs);
    this.inputService.postData(input as string)
      .subscribe(results => {
        this.outputs = JSON.parse(JSON.stringify(results));
        $(".headTitle").css("color", "green");
        $('#loader').fadeOut();
      });
  }

  
}
