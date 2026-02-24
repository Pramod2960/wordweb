import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ResourcePerson = () => {
  return (
    <div
    className="mb-10  mt-5   items-center justify-center">
       <h1  className="text-2xl text-center animate-slidein [--slidein-delay:300ms] opacity-0">Project Team</h1>
    <div className="flex flex-wrap gap-1 mt-1 items-center justify-center animate-slidein [--slidein-delay:500ms] opacity-0 ">

       <div className="flex">
        <Card
        className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="sanjay"
              src="/person/sanjay.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Prof. Sanjay K. Jha </CardTitle>
            <CardDescription
            >
              Principal Investigator Director, Liberal Arts <br />
              Amity University, Haryana.
             <br/>
            
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="supriya"
              src="/person/supriya.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Dr. Supriya Sanju</CardTitle>
            <CardDescription>
              Co-Principal Investigator, <br />
              Coordinator, ACSIS,
              <br />
              Amity University Haryana
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="pankaj"
              src="/person/pankaj.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Dr. Pankaj K Mishra</CardTitle>
            <CardDescription>
              St. Stephens College, <br />
              University of Delhi
              <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="prasun"
              src="/person/prasun.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Dr. Prasun K Mishra</CardTitle>
            <CardDescription>
              Sansad TV, Delhi <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image height={180} width={180} 
            alt="om"
             src="/person/om.png"
             className="mx-auto"
              />
             
            <CardTitle
            className="text-xl"
            >Prof. Om Nath Bimli</CardTitle>
            <CardDescription>
              HOD, Sanskrit, <br />
              University of Delhi
              <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image height={180} width={180}
             alt="ravi" src="/person/ravi.jpg" 
             className="mx-auto"
             />
            <CardTitle
            className="text-xl"
            >Dr. Ravi Dutt Sharma</CardTitle>
            <CardDescription>
              Assistant Prof. JDMC, <br />
              University of Delhi
              <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="sikka"
              src="/person/sikka.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Dr. Sunil Sikka</CardTitle>
            <CardDescription>
             Prof. CSE department <br />
             Amity University Haryana
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="ganesh"
              src="/person/ganesh.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Mr. Ganesh Bhat</CardTitle>
            <CardDescription>
              Assistant Prof. , SSSUHE <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="pramod"
              src="/person/pramod.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Mr. Pramod Kumar</CardTitle>
            <CardDescription>
              Software Developer (MCA) <br />
              Amity University, Haryana
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="naveen"
              src="/person/naveen.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Dr. Naveen Bhat</CardTitle>
            <CardDescription>
              HOD, Sanskrit, SSSUHE <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="monalisa"
              src="/person/monalisa.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Ms. Monalisa Vats</CardTitle>
            <CardDescription>
              Project Fellow <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex ">
        <Card
         className="h-[330px] w-[235px]"
        >
          <CardHeader>
            <Image
              height={180}
              width={180}
              alt="dinesh"
              src="/person/dinesh.png"
              className="mx-auto"
            />
            <CardTitle
            className="text-xl"
            >Mr. Dinesh</CardTitle>
            <CardDescription>
              Data Operator. ASLA <br />
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default ResourcePerson;
