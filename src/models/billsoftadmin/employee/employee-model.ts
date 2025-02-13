import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/sequelize"; // Adjust path for your Sequelize instance

// Define attributes
interface EmployeeAttributes {
    id: number;
    CustomerId?: string;
    ColgId?: string;
    ShopName?: string;
    Fname: string;
    Mname?: string;
    Lname?: string;
    Phone: string;
    Phone2?: string;
    EmailId?: string;
    Password: string;
    CountryId: string;
    StateId: string;
    CityId: string;
    AreaId?: string;
    Address: string;
    Pincode?: string;
    Photo?: string;
    Photo2?: string;
    Photo3?: string;
    GstNo?: string;
    PanNo?: string;
    Roll: string;
    Status: string;
    CreatedBy: string;
    ModifiedBy: string;
    CreatedDate: Date;
    ModifiedDate?: Date;
    Options?: string;
    BranchId?: string;
    Dob?: Date; // Date format
    Area?: string;
    UserType: number;
    PayMode?: string;
    UnderUser: number;
    Lattitude?: string;
    Longitude?: string;
    AadharNo?: string;
    AadharCard?: string;
    AadharCard2?: string;
    PanCard?: string;
    PanCard2?: string;
    GstCertificate?: string;
    AccountName?: string;
    BankName?: string;
    AccountNo?: string;
    IfscCode?: string;
    Branch?: string;
    UpiNo?: string;
    GumastaNo?: string;
    Gumasta?: string;
    MsmeNo?: string;
    Msme?: string;
    InspectionDate?: Date; // Date format
    CommissioningDate?: string; // Date format
    CustType: number;
    Details?: string;
    CatId: string; // Non-nullable varchar(10)
    CompName?: string;
    CompAddress?: string;
    CompPhone?: string;
    AuthorName?: string;
    Tokens?: string;
    CompId: number;
    FatherPhone?: string;
    Designation?: string;
    BloodGroup?: string;
    JoinDate?: string; // Date format
    EmailId2?: string;
    PerDaySalary?: number; // float(14,2)
    Barcode?: string;
    KycStatus: boolean; // tinyint(1)
    KycDate?: string; // Date format
    Profession?: string;
    FsiicNo?: string;
    ShopActNo?: string;
    AnniversaryDate?: string; // Date format
    ExeId: number;
    SellAmt?: number; // float(14,2)
    SellDate?: string; // Date format
    UnderFr: number;
    ReportingMgr: boolean; // tinyint(1)
    ResignStatus: boolean; // tinyint(1)
    ResignDate?: string; // Date format
    ResignComment?: string;
    BillSoftFrId: number;
    PkgId: number;
    PkgAmt?: number; // float(14,2)
    PkgDiscount?: number; // float(14,2)
    PkgDate?: string; // Date format
    PkgValidity?: string; // Date format
    Prime: boolean; // tinyint(1)
    terms_condition?: string;
    bottom_title?: string;
    ReferCode?: string;
    OwnFranchise: boolean; // tinyint(1)
    PrintCompName?: string;
    PrintMobNo?: string;
    TableQrCode?: string;
    FoodLicence?: string;
    FoodLicenceReceipt?: string;
    AgreementCopy?: string;
    SalaryType: boolean; // tinyint(1)
    CreditSalaryStatus: boolean; // tinyint(1)
    IdStatus: boolean; // tinyint(1)
    zone?: string;
    CocoFranchiseAccess?: string;
    CinNo?: string;
    push_flag: boolean; // tinyint(1)
    delete_flag: boolean; // tinyint(1)
    modified_time?: string; // Date-Time format
    UnderFrId: number;
    Location?: string;
    ShowFrStatus: boolean; // tinyint(1) default 1
    ReferalNo1?: string;
    ReferalNo2?: string;
    NomineePartnerName?: string;
    NomineePartnerRelation?: string;
    NomineePartnerPhone?: string;
    BillAmount?: number; // float(14,2)
    ExpCatId?: string;
    MainBrEmp: boolean; // tinyint(1)
    ExpApproval: boolean; // tinyint(1)
    UnderByUser: number;
    DeliveryPerson: boolean; // tinyint(1)
    ChequeBook?: string;
    TradeName?: string;
    TypeOfVendor: number;
    AllocateProd?: string;
    AllocateRawProd?: string;
}

// Optional attributes for creation
interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, "id"> { }

// Sequelize Model
class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
    public id!: number;
    public Fname!: string;
    public Phone!: string;
    public Password!: string;
    public CountryId!: string;
    public StateId!: string;
    public CityId!: string;
    public Address!: string;
    public Roll!: string;
    public Status!: string;
    public CreatedBy!: string;
    public CreatedDate!: Date;
    public ModifiedBy!: string;
    public ModifiedDate?: Date;
    public Options?: string;
    public BranchId?: string;
    public Dob?: Date;
    public Area?: string;
    public UserType!: number;
    public PayMode?: string;
    public UnderUser!: number;
    public Lattitude?: string;
    public Longitude?: string;
    public AadharNo?: string;
    public AadharCard?: string;
    public AadharCard2?: string;
    public PanCard?: string;
    public PanCard2?: string;
    public GstCertificate?: string;
    public AccountName?: string;
    public BankName?: string;
    public AccountNo?: string;
    public IfscCode?: string;
    public Branch?: string;
    public UpiNo?: string;
    public GumastaNo?: string;
    public Gumasta?: string;
    public MsmeNo?: string;
    public Msme?: string;
    public InspectionDate?: Date;
    public CommissioningDate?: Date;
    public CustType!: number;
    public Details?: string;
    public CatId!: string;
    public CompName?: string;
    public CompAddress?: string;
    public CompPhone?: string;
    public AuthorName?: string;
    public Tokens?: string;
    public CompId!: number;
    public FatherPhone?: string;
    public Designation?: string;
    public BloodGroup?: string;
    public JoinDate?: Date;
    public EmailId2?: string;
    public PerDaySalary?: number;
    public Barcode?: string;
    public KycStatus!: boolean;
    public KycDate?: Date;
    public Profession?: string;
    public FsiicNo?: string;
    public ShopActNo?: string;
    public AnniversaryDate?: Date;
    public ExeId!: number;
    public SellAmt?: number;
    public SellDate?: Date;
    public UnderFr!: number;
    public ReportingMgr!: boolean;
    public ResignStatus!: boolean;
    public ResignDate?: Date;
    public ResignComment?: string;
    public BillSoftFrId!: number;
    public PkgId!: number;
    public PkgAmt?: number;
    public PkgDiscount?: number;
    public PkgDate?: Date;
    public PkgValidity?: Date;
    public Prime!: boolean;
    public terms_condition?: string;
    public bottom_title?: string;
    public ReferCode?: string;
    public OwnFranchise!: boolean;
    public PrintCompName?: string;
    public PrintMobNo?: string;
    public TableQrCode?: string;
    public FoodLicence?: string;
    public FoodLicenceReceipt?: string;
    public AgreementCopy?: string;
    public SalaryType!: boolean;
    public CreditSalaryStatus!: boolean;
    public IdStatus!: boolean;
    public zone?: string;
    public CocoFranchiseAccess?: string;
    public CinNo?: string;
    public push_flag!: boolean;
    public delete_flag!: boolean;
    public modified_time?: Date;
    public UnderFrId!: number;
    public Location?: string;
    public ShowFrStatus!: boolean;
    public ReferalNo1?: string;
    public ReferalNo2?: string;
    public NomineePartnerName?: string;
    public NomineePartnerRelation?: string;
    public NomineePartnerPhone?: string;
    public BillAmount?: number;
    public ExpCatId?: string;
    public MainBrEmp!: boolean;
    public ExpApproval!: boolean;
    public UnderByUser!: number;
    public DeliveryPerson!: boolean;
    public ChequeBook?: string;
    public TradeName?: string;
    public TypeOfVendor!: number;
    public AllocateProd?: string;
    public AllocateRawProd?: string;
}

Employee.init(
    {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        Fname: { type: DataTypes.STRING, allowNull: false },
        Phone: { type: DataTypes.STRING, allowNull: false },
        Password: { type: DataTypes.STRING, allowNull: false },
        CountryId: { type: DataTypes.STRING, allowNull: false },
        StateId: { type: DataTypes.STRING, allowNull: false },
        CityId: { type: DataTypes.STRING, allowNull: false },
        Address: { type: DataTypes.STRING, allowNull: false },
        Roll: { type: DataTypes.STRING, allowNull: false },
        Status: { type: DataTypes.STRING, allowNull: false },
        CreatedBy: { type: DataTypes.STRING, allowNull: false },
        CreatedDate: { type: DataTypes.DATE, allowNull: false },
        ModifiedBy: { type: DataTypes.STRING },
        ModifiedDate: { type: DataTypes.DATE },
    },
    {
        sequelize,
        tableName: "tbl_users_bill",
        timestamps: false, // Set to false if no Sequelize timestamps are used
    }
);

export const get = async (roll: number): Promise<Employee[]> => {
    return await Employee.findAll({
        where: { Roll: roll },
    });
};

export const create = async (saveRecord: EmployeeCreationAttributes): Promise<Employee> => {
    const newRecord = await Employee.create(saveRecord);
    console.log("newRecord--------", newRecord);
    return newRecord;
};


export const edit = async (id: number): Promise<Employee | null> => {
    return await Employee.findByPk(id);
};

export const update = async (id: number, updates: Partial<EmployeeAttributes>): Promise<Employee | null> => {
    const [affectedRows, [updatedRecord]] = await Employee.update(updates, {
        where: { id },
        returning: true,
    });

    return affectedRows > 0 ? updatedRecord : null;
};

export const destroy = async (id: number): Promise<boolean> => {
    const deletedCount = await Employee.destroy({
        where: { id },
    });

    return deletedCount > 0;
};
