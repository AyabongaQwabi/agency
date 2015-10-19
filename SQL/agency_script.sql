drop table if exists Contracts;
drop table if exists Consultant;
drop table if exists Company;
drop table if exists Freelancer;


create table  Freelancer (id int not null primary key auto_increment,
							name varchar(35),
							ID_no int
							);

create table  Company (id int not null primary key auto_increment,
							name varchar(35),
							Reg_no int
							);


create table  Consultant (id int not null primary key auto_increment, 
							Name varchar(35),
							ID_no int
							);

create table  Contracts (id int not null primary key auto_increment,
							Freelancer varchar(35),
							Company varchar(35),
							Start_date date,
							End_date date,
							Consultant varchar(35)
							foreign key (Freelancer) references Freelancer(id),
							foreign key (Company) references Company(id),
							foreign key (Consultant) references Consultant(id)
							);
