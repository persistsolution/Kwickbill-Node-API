import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("tbl_users_bill", function (table) {
        table.increments("id").primary(); // Auto-increment ID
        table.string("CustomerId", 100).notNullable();
        table.integer("ColgId").nullable();
        table.string("ShopName", 255).nullable();
        table.string("Fname", 50).nullable();
        table.string("Mname", 50).nullable();
        table.string("Lname", 50).nullable();
        table.string("Phone", 20).nullable();
        table.string("Phone2", 20).nullable();
        table.string("EmailId", 100).nullable();
        table.string("Password", 100).nullable();
        table.integer("CountryId").notNullable();
        table.integer("StateId").notNullable();
        table.integer("CityId").notNullable();
        table.integer("AreaId").nullable();
        table.text("Address").nullable();
        table.string("Pincode", 100).nullable();
        table.string("Photo", 100).nullable();
        table.string("Photo2", 255).nullable();
        table.string("Photo3", 255).nullable();
        table.string("GstNo", 255).nullable();
        table.string("PanNo", 255).nullable();
        table.integer("Roll").notNullable().comment("1:superadmin;2:telecaller;3:Manufacture;4:supervisior;5:customer;6:executive;7:admin;8:employee;9:dealer;10:company;");
        table.integer("Status").notNullable();
        table.integer("CreatedBy").notNullable();
        table.integer("ModifiedBy").notNullable();
        table.date("CreatedDate").notNullable();
        table.date("ModifiedDate").nullable();
        table.text("Options").nullable();
        table.string("BranchId", 255).nullable();
        table.date("Dob").nullable();
        table.string("Area", 255).nullable();
        table.integer("UserType").notNullable();
        table.string("PayMode", 255).nullable();
        table.integer("UnderUser").notNullable();
        table.string("ProjectType", 255).nullable();
        table.string("BeneficiaryId", 255).nullable();
        table.string("Taluka", 255).nullable();
        table.string("Village", 255).nullable();
        table.string("District", 255).nullable();
        table.string("PumpCapacity", 255).nullable();
        table.string("RooftopPlantCapacity", 255).nullable();
        table.string("Lattitude", 255).nullable();
        table.string("Longitude", 255).nullable();
        table.string("OffOnGrid", 255).nullable();
        table.string("SanctionLoad", 255).nullable();
        table.string("LoadExtension", 255).nullable();
        table.string("WaterSource", 255).nullable();
        table.string("SummerDepth", 255).nullable();
        table.string("WinterDepth", 255).nullable();
        table.string("PumpHead", 255).nullable();
        table.string("BgNumber", 255).nullable();
        table.string("BgValidity", 255).nullable();
        table.string("BgClaimPeriod", 255).nullable();
        table.string("InsuranceNumber", 255).nullable();
        table.string("InsuranceAgency", 255).nullable();
        table.string("InsuranceValidity", 255).nullable();
        table.string("InstallationVendor", 255).nullable();
        table.smallint("SurveyDetails").notNullable();
        table.integer("SchemeId").notNullable();
        table.string("PumpHeadSelect", 255).nullable();
        table.string("AcDc", 255).nullable();
        table.string("Surface", 255).nullable();
        table.string("AadharNo", 255).nullable();
        table.string("AadharCard", 255).nullable();
        table.string("AadharCard2", 255).nullable();
        table.string("PanCard", 255).nullable();
        table.string("PanCard2", 255).nullable();
        table.string("GstCertificate", 255).nullable();
        table.text("AccountName").nullable();
        table.text("BankName").nullable();
        table.text("AccountNo").nullable();
        table.string("IfscCode", 255).nullable();
        table.string("Branch", 255).nullable();
        table.text("UpiNo").nullable();
        table.string("GumastaNo", 255).nullable();
        table.text("Gumasta").nullable();
        table.string("MsmeNo", 255).nullable();
        table.text("Msme").nullable();
        table.date("InspectionDate").nullable();
        table.date("CommissioningDate").nullable();
        table.integer("CustType").notNullable();
        table.string("BoreDia", 100).notNullable();
        table.text("Details").nullable();
        table.string("CatId", 10).notNullable();
        table.string("CompName", 255).nullable();
        table.text("CompAddress").nullable();
        table.string("CompPhone", 100).nullable();
        table.string("AuthorName", 255).nullable();
        table.text("Tokens").nullable();
        table.integer("CompId").notNullable();
        table.string("FatherPhone", 100).nullable();
        table.string("Designation", 255).nullable();
        table.string("BloodGroup", 100).nullable();
        table.date("JoinDate").nullable();
        table.string("EmailId2", 255).nullable();
        table.float("PerDaySalary", 14, 2).nullable();
        table.string("Barcode", 255).nullable();
        table.smallint("KycStatus").notNullable();
        table.date("KycDate").nullable();
        table.string("Profession", 255).nullable();
        table.string("FsiicNo", 255).nullable();
        table.string("ShopActNo", 255).nullable();
        table.date("AnniversaryDate").nullable();
        table.integer("ExeId").notNullable();
        table.float("SellAmt", 14, 2).nullable();
        table.date("SellDate").nullable();
        table.integer("UnderFr").notNullable();
        table.smallint("ReportingMgr").notNullable();
        table.smallint("ResignStatus").notNullable();
        table.date("ResignDate").nullable();
        table.text("ResignComment").nullable();
        table.integer("BillSoftFrId").notNullable();
        table.integer("PkgId").notNullable();
        table.float("PkgAmt", 14, 2).nullable();
        table.float("PkgDiscount", 14, 2).nullable();
        table.date("PkgDate").nullable();
        table.date("PkgValidity").nullable();
        table.smallint("Prime").notNullable();
        table.text("terms_condition").nullable();
        table.text("bottom_title").nullable();
        table.string("ReferCode", 255).nullable();
        table.smallint("OwnFranchise").notNullable();
        table.string("PrintCompName", 255).nullable();
        table.string("PrintMobNo", 50).nullable();
        table.string("TableQrCode", 255).nullable();
        table.string("FoodLicence", 255).nullable();
        table.string("FoodLicenceReceipt", 255).nullable();
        table.string("AgreementCopy", 255).nullable();
        table.smallint("SalaryType").notNullable();
        table.smallint("CreditSalaryStatus").notNullable();
        table.smallint("IdStatus").notNullable();
        table.text("zone").nullable();
        table.text("CocoFranchiseAccess").nullable();
        table.text("CinNo").nullable();
        table.smallint("push_flag").notNullable();
        table.smallint("delete_flag").notNullable();
        table.timestamp("modified_time").defaultTo(knex.fn.now());
        table.integer("UnderFrId").notNullable();
        table.text("Location").nullable();
        table.smallint("ShowFrStatus").notNullable().defaultTo(1);
        table.text("ReferalNo1").nullable();
        table.text("ReferalNo2").nullable();
        table.text("NomineePartnerName").nullable();
        table.text("NomineePartnerRelation").nullable();
        table.text("NomineePartnerPhone").nullable();
        table.float("BillAmount", 14, 2).nullable();
        table.string("ExpCatId", 100).nullable();
        table.smallint("MainBrEmp").notNullable();
        table.smallint("ExpApproval").notNullable();
        table.integer("UnderByUser").notNullable();
        table.smallint("DeliveryPerson").notNullable();
        table.text("ChequeBook").nullable();
        table.text("TradeName").nullable();
        table.integer("TypeOfVendor").notNullable();
        table.string("RefPhone", 20).nullable();
        table.string("RefPhone2", 20).nullable();
        table.string("RefEmailId", 50).nullable();
        table.text("AllocateProd").nullable();
        table.text("AllocateRawProd").nullable();
        table.string("Percentage", 20).nullable();
        table.text("AuthToken").nullable();
        table.text("DeclarationPdf").nullable();
        table.text("NomineeName").nullable();
        table.text("NomineeRelation").nullable();
        table.integer("NomineePhone").nullable();
        table.text("NomineeAadharNo").nullable();
        table.integer("ZoneId").notNullable();
        table.string("MonthlySalary", 20).nullable();
        table.text("DeclarationPhoto").nullable();
        table.smallint("MgrCheckpoint").notNullable();
        table.smallint("OtherEmp").notNullable();
        
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("tbl_users_bill");
}

