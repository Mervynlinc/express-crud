'use client'
import { useEffect, useState} from "react";
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
  const [data, setData] = useState([])

  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/")
        if (!response.ok) throw Error("Failed to fetch data");
        const users = await response.json()
        setData(users)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
    console.log(data)
  }, [])

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
          {data.map((user) => {
            return (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2 justify-center items-center">
                  <Trash/>
                  <Pencil/>
                  <View/>
                </div>
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </div>
  );
}
