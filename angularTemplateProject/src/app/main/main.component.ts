import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { coreClass } from '../coreClass'; //referencing the external class 
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
  };  //defined here in one place for simplicity but more likely to be cl=ollected from a form or sso inputs

  //defined here to later receive the results of the http call
  //outputs object is fully defined with sample data even before the http call. the compliler will complain if it is not. All values will be replaced with response data from the http call and updated in the html since we used angular http rather than the jquery ajax method
  outputs = {
    "output_show_fourth": "",
    "output_HCFSA_GAP": "",
    "output_MatchNewRate2": "",
    "output_MatchNewRate1": "",
    "output_FamilyHSA": "",
    "output_RULE_PreAE": "",
    "output_show_sixth": "",
    "output_Year": "",
    "output_RULE_RetNotContrib": "",
    "output_RULE_RetMaxed": "",
    "output_MissedValue_RET": "",
    "output_Shortfall": "",
    "output_MatchRemainingTotalEE": "",
    "output_RULE_CDHPwithFSA": "",
    "output_DCFSA_GAP": "",
    "output_RULE_Newhire": "",
    "output_MatchNewRateUnround": "",
    "output_RetCatchup": "",
    "output_show_second": "",
    "output_RULE_DCFSA_No": "",
    "output_RetPctMax": "",
    "output_RULE_HCFSA_No": "",
    "output_RULE_MedPPO": "",
    "output_RULE_RetNoMatchData": "",
    "output_RULE_MatchNotElig": "",
    "output_RULE_Hardship": "",
    "output_MatchNewRateFinal": "",
    "output_Order_DCFSA": "",
    "output_MatchDiffFromTarget": "",
    "output_MatchRemainingMonths": "",
    "output_MatchRemainingTotalComp": "",
    "output_RULE_RetBonusAmt": "",
    "output_TotalGap": "",
    "output_RULE_MedNoCov": "",
    "output_RULE_HSA_UnderMax": "",
    "output_MatchPotential": "",
    "output_MatchShortfallCalc": "",
    "output_RULE_OptLife": "",
    "output_RULE_RetBonusPct": "",
    "output_MatchRemainingPerMonthEE": "",
    "output_RULE_MatchProjJobData": "",
    "output_HSA_Inc": "",
    "output_MatchProjCompanyMatch": "",
    "output_show_third": "",
    "output_RULE_MedCDHP": "",
    "output_show_first": "",
    "output_HSA_GAP": "",
    "output_show_fifth": "",
    "output_RULE_HCFSA_Max": "",
    "output_RULE_ClaimsHigh": "",
    "output_RULE_RetDisplayMatch": "",
    "output_MatchContNeedToMaximize": "",
    "output_RULE_ClaimsNoFSA": "",
    "output_RULE_NotBonusWindow": "",
    "output_RULE_RetPlanLimit": "",
    "output_RULE_SpouseLife": "",
    "output_Order_HCFSA": "",
    "output_RULE_Spouse": "",
    "output_MissedValue_HCFSA": "",
    "output_ReturnMonth": "",
    "output_RetPct": "",
    "output_RULE_DCFSA_Max": "",
    "output_CurrentDate": "",
    "output_RetCatchupElection": "",
    "output_RULE_Age55": "",
    "output_MatchRemainingPerMonthComp": "",
    "output_SingleHSA": "",
    "output_Order_RET": "",
    "output_RULE_Age50": "",
    "output_RetContDate": "",
    "output_RULE_BonusWindow1": "",
    "output_RULE_Ltd_Purpose": "",
    "output_RULE_OptLife50": "",
    "output_RULE_PostAE": "",
    "output_RULE_DCFSA_UnderMax": "",
    "output_RULE_HSA_No": "",
    "output_RULE_FSA": "",
    "output_Order_HSA": "",
    "output_RULE_RetAlertMatch": "",
    "output_RetPctInc": "",
    "output_RULE_BonusWindow3": "",
    "output_RULE_BonusWindow2": "",
    "output_TotalClaims": "",
    "output_RULE_HCFSA_Auto": "",
    "output_RULE_HSA_Max": "",
    "output_RULE_NotAE": "",
    "output_RULE_RetCont4": "",
    "output_RULE_DCFSA_YrEndBal": "",
    "output_HSA_firm": "",
    "output_RULE_HCFSA_UnderMax": "",
    "output_RULE_AE": "",
    "output_RetBonusSource": "",
    "output_RULE_RetIRS": "",
    "output_RULE_MedEXPAT": "",
    "output_MissedValue_HSA": "",
    "output_RULE_HCFSA_YrEndBal": "",
    "output_RULE_BonusWindow": "",
    "output_MissedValue_DCFSA": "",
    "output_RULE_RetSuppressMatch": ""
  }

  cc: coreClass = new coreClass(25, "Good Morning!", 1, 2, 3, 4); //example of how to instantiate an external class for specialized purpose

  constructor(private inputService: InputService) { //dependency injection 
  }

  ngOnInit() {
    $("button").on("click", function () {     //example of how to call a jquery method
      alert("Hello");
    });
  }

  //two functions called from the html template
  //this function calls a method of the external class coreClass
  callCore(): void {
    alert(this.cc.greet());
  }

  //this function makes an http post using angular's native http object rather than jquery's $.ajax. Angular will take care of updating the html after the call returns whereas jquery will not.
  //It uses the inputService created for the purpose of making the http call.
  //Services and the coding nomenclature (arrow functions, observables etc is all explained in the tour-of-heroes tutorial in Angular
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
