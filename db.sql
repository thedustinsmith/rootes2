CREATE TABLE Product (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, 
    Name VARCHAR (255) NOT NULL, 
    RegulationNumber VARCHAR (25) NOT NULL 
    IsRemoved BOOLEAN NOT NULL DEFAULT false, 
    DateRemoved DATETIME
);
CREATE TABLE Grower (
    ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, 
    Name VARCHAR (255) NOT NULL, 
    Address VARCHAR (255), 
    Phone VARCHAR (25), County VARCHAR (255), 
    DateCreated DATETIME DEFAULT (datetime()), 
    IsRemoved BOOLEAN NOT NULL DEFAULT false, 
    DateRemoved DATETIME
);

CREATE TABLE Applicator (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, 
    Name VARCHAR (255) NOT NULL, 
    SprayerUnit VARCHAR, 
    LicenseNumber VARCHAR, 
    IsRemoved BOOLEAN NOT NULL DEFAULT (0), 
    DateRemoved DATETIME
);

CREATE TABLE Location (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
    GrowerID INTEGER REFERENCES Grower (ID) NOT NULL, 
    Name VARCHAR (255) NOT NULL, 
    DateCreated DATETIME NOT NULL DEFAULT (datetime()), 
    IsRemoved bit NOT NULL DEFAULT (0), 
    DateRemoved DATETIME
);

CREATE TABLE Job (
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    ApplicatorID INTEGER REFERENCES Applicator (ID) NOT NULL, 
    JobDate DATETIME,
    StartTime DATETIME,
    EndTime DATETIME,
    FieldCondition VARCHAR(50),
    Crop VARCHAR(255),
    TargetPests VARCHAR(255),
    ApplicationType VARCHAR(50),
    CropHeight VARCHAR(50),
    Temperature INTEGER,
    WindDirection VARCHAR(10),
    WindSpeed INTEGER,
    Humidity INTEGER,      
    WeatherCondition VARCHAR(255),
    UnitNumber VARCHAR(25),
    WaterAmount INTEGER
);

CREATE TABLE Job_Product (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    JobID INTEGER REFERENCES Job (ID) NOT NULL, 
    ProductID INTEGER REFERENCES Product (ID) NOT NULL, 
    Rate INTEGER
);
