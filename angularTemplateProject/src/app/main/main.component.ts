import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { coreClass } from '../coreClass'; //referencing the external class 
import { InputService } from '../input.service';
//import { core } from '@angular/compiler';

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
  //outputs object is fully defined with sample data even before the http call. the compliler will complain if it is not. All values will be replaced with response data from the http call
  outputs = { "output_show_fourth": "HCFSA", "output_HCFSA_GAP": 650.0, "output_MatchNewRate2": 0.09, "output_MatchNewRate1": 0.08, "output_FamilyHSA": 7900.0, "output_RULE_PreAE": false, "output_show_sixth": "OTHER", "output_Year": 2019.0, "output_RULE_RetNotContrib": false, "output_RULE_RetMaxed": false, "output_MissedValue_RET": 500.0, "output_Shortfall": 500.0, "output_MatchRemainingTotalEE": 3367.5599999999995, "output_RULE_CDHPwithFSA": true, "output_DCFSA_GAP": 3996.0, "output_RULE_Newhire": false, "output_MatchNewRateUnround": 0.08820204899777281, "output_RetCatchup": 6000.0, "output_show_second": "HSA", "output_RULE_DCFSA_No": false, "output_RetPctMax": 9.0, "output_RULE_HCFSA_No": false, "output_RULE_MedPPO": false, "output_RULE_RetNoMatchData": false, "output_RULE_MatchNotElig": false, "output_RULE_Hardship": false, "output_MatchNewRateFinal": 0.09, "output_Order_DCFSA": 1.0, "output_MatchDiffFromTarget": 460.33999999999924, "output_MatchRemainingMonths": 5.0, "output_MatchRemainingTotalComp": 67350.0, "output_RULE_RetBonusAmt": true, "output_TotalGap": 2637.0, "output_RULE_MedNoCov": false, "output_RULE_HSA_UnderMax": true, "output_MatchPotential": 8960.4, "output_MatchShortfallCalc": 4950.339999999999, "output_RULE_OptLife": true, "output_RULE_RetBonusPct": true, "output_MatchRemainingPerMonthEE": 561.26, "output_RULE_MatchProjJobData": true, "output_HSA_Inc": 4900.0, "output_MatchProjCompanyMatch": 6816.36, "output_show_third": "RET", "output_RULE_MedCDHP": true, "output_show_first": "DCFSA", "output_HSA_GAP": 975.0, "output_show_fifth": "MEDICAL", "output_RULE_HCFSA_Max": false, "output_RULE_ClaimsHigh": true, "output_RULE_RetDisplayMatch": true, "output_MatchContNeedToMaximize": 2144.3999999999996, "output_RULE_ClaimsNoFSA": false, "output_RULE_NotBonusWindow": true, "output_RULE_RetPlanLimit": false, "output_RULE_SpouseLife": true, "output_Order_HCFSA": 4.0, "output_RULE_Spouse": true, "output_MissedValue_HCFSA": 163.0, "output_ReturnMonth": "late March", "output_RetPct": 5.0, "output_RULE_DCFSA_Max": false, "output_CurrentDate": 43540.0, "output_RetCatchupElection": 500.0, "output_RULE_Age55": true, "output_MatchRemainingPerMonthComp": 11225.0, "output_SingleHSA": 4450.0, "output_Order_RET": 3.0, "output_RULE_Age50": true, "output_RetContDate": "07/31/18", "output_RULE_BonusWindow1": false, "output_RULE_Ltd_Purpose": true, "output_RULE_OptLife50": true, "output_RULE_PostAE": true, "output_RULE_DCFSA_UnderMax": true, "output_RULE_HSA_No": false, "output_RULE_FSA": true, "output_Order_HSA": 2.0, "output_RULE_RetAlertMatch": true, "output_RetPctInc": 4.0, "output_RULE_BonusWindow3": false, "output_RULE_BonusWindow2": false, "output_TotalClaims": 6000.0, "output_RULE_HCFSA_Auto": true, "output_RULE_HSA_Max": false, "output_RULE_NotAE": true, "output_RULE_RetCont4": false, "output_RULE_DCFSA_YrEndBal": false, "output_HSA_firm": 1000.0, "output_RULE_HCFSA_UnderMax": true, "output_RULE_AE": false, "output_RetBonusSource": "Roth", "output_RULE_RetIRS": false, "output_RULE_MedEXPAT": false, "output_MissedValue_HSA": 975.0, "output_RULE_HCFSA_YrEndBal": false, "output_RULE_BonusWindow": false, "output_MissedValue_DCFSA": 999.0, "output_RULE_RetSuppressMatch": false }; 

  

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
