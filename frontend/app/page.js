import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Trash, Pencil, View} from "lucide-react"


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white" >
      <Table className="px-3 rounded border-1 m-4 max-w-11/12">
        <TableCaption>A list of registered Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium"></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">
              <div className="flex gap-2 justify-center items-center">
                <Trash />
                <Pencil />
                <View />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    </div>
  );
}
