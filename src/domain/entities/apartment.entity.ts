import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imgUrl: string;

  @Column()
  appartmentTypeId: number;

  @Column()
  compoundId: number;

  @Column()
  numberOfBeds: number;

  @Column()
  numberOfBaths: number;

  @Column()
  areaInM2: number;

  @Column()
  price: number;

  @Column()
  address: string;

  @Column()
  floor: number;

  @Column("simple-array")
  amenities: string[];

  @Column()
  availability: boolean;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  constructor(
    id: number,
    imgUrl: string,
    appartmentTypeId: number,
    compoundId: number,
    numberOfBeds: number,
    numberOfBaths: number,
    areaInM2: number,
    price: number,
    address: string,
    floor: number,
    amenities: string[],
    availability: boolean,
    description: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id= id;
    this.imgUrl= imgUrl;
    this.appartmentTypeId= appartmentTypeId;
    this.compoundId= compoundId;
    this.numberOfBeds= numberOfBeds;
    this.numberOfBaths= numberOfBaths;
    this.areaInM2= areaInM2;
    this.price= price;
    this.address= address;
    this.floor= floor;
    this.amenities= amenities;
    this.availability= availability;
    this.description= description;
    this.createdAt= createdAt;
    this.updatedAt= updatedAt;
  }
}
