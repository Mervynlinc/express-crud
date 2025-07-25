'use client'
import { useEffect, useState} from "react";
import UpdateModel from "@/components/ui/updateModel";
import Model from "@/components/ui/model";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Trash, Pencil, Eye} from "lucide-react"
import DeleteConfirmationModal from "@/components/ui/deleteConfirmationModel";


export default function Home() {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null); // store the user to delete
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

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
  }, [])

  const handleUpdateClick = (user) => {
    setShowUpdateModal(true);
    setUser(user);
  };

  const handleUpdate = (updatedUser) => {
    setData((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

    const handleDeleteClick = (id) => {
  setDeleteTarget(id);
  setShowDeleteModal(true);
};

  const confirmDelete = async () => {
  try {
    const res = await fetch(`http://localhost:3001/${deleteTarget}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete user");

    setData(prev => prev.filter(user => user.id !== deleteTarget));
    setShowDeleteModal(false);
    setDeleteTarget(null);
  } catch (err) {
    console.error("Error deleting user:", err);
    alert("Delete failed.");
  }
};


  const handleClose = () => {
    setIsOpen(false); 
    setShowUpdateModal(false);
    setUser(null); // Clear user data when closing the modal
  }

  const cancelDelete = () => {
  setShowDeleteModal(false);
  setDeleteTarget(null);
};


    const handleOpen = async (id) => {
      try{
        const response = await fetch(`http://localhost:3001/${id}`);
        if (!response.ok) throw Error("Failed to fetch user details");
        const user = await response.json();
        setUser(user);
        setIsOpen(true);
      }
    catch (error) {
        console.error("Error fetching user details:", error);
    }
  }


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
                  <Trash color="red" className="cursor-pointer" onClick={() => handleDeleteClick(user.id)}/>
                  <Pencil color="blue" className="cursor-pointer" onClick={() => handleUpdateClick(user)}/>
                  <Eye onClick={() => handleOpen(user.id)}/>
                </div>
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>

      {showDeleteModal && (
  <DeleteConfirmationModal
    userId={deleteTarget}  
    onCancel={cancelDelete}
    onConfirm={confirmDelete}
  />
)}
      {showUpdateModal && 
        <UpdateModel onclose={handleClose} user={user} onUpdate={handleUpdate} />
      }

      {isOpen && 
        <Model onclose={handleClose} user={user} />
      }

    </div>
  );
}
