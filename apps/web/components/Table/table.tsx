import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { TiArrowSortedUp } from "react-icons/ti";
import { columns, users } from "./data"; 

interface User {
  id: number;
  name: string;
  age: string;
  role: string;
  team: string;
  email: string;
  status: string;
}

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortedUsers, setSortedUsers] = useState<User[]>(users);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortDirections, setSortDirections] = useState<Record<string, "asc" | "desc">>({});

  const handleSortChange = (column: string) => {
    setIsLoading(true);
    if (sortKey === column) {
      const direction = sortDirections[column] === "asc" ? "desc" : "asc";
      setSortDirections({ ...sortDirections, [column]: direction });
      setSortDirection(direction);
    } else {
      setSortKey(column);
      setSortDirection("asc");
      setSortDirections({ ...sortDirections, [column]: "asc" });
    }
    setIsLoading(false);
  };

  const handleAddProductClick = (id: number) => {
    console.log("ID:", id);
  };

  // Sort function based on column and direction
  const sorted = [...sortedUsers].sort((a, b) => {
    if (!sortKey) return 0; // If no sorting key, do not sort

    const aValue = String(a[sortKey as keyof User]);
    const bValue = String(b[sortKey as keyof User]);

    const comparison = aValue.localeCompare(bValue);

    return sortDirection === "asc" ? comparison : -comparison;
  });

  return (
    <Table
      aria-label="Example table with client side sorting"
      classNames={{
        table: "min-h-[400px] overflow-scroll",
        wrapper: "p-12 border-box bg-white rounded-2xl",
        sortIcon: `hidden`,
      }}
    >
      <TableHeader className="text-left">
        {columns.map((col) => (
          <TableColumn
            key={col.uid}
            allowsSorting={col.sortable}
            onClick={() => handleSortChange(col.uid)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {col.name}
              {sortKey === col.uid && (
                <TiArrowSortedUp
                  className={`ml-1 ${sortDirections[col.uid] === 'desc' ? 'rotate-180' : ''} duration-500`}
                  size={16}
                />
              )}
            </div>
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody
        items={sorted}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item: User) => (
          <TableRow key={item.id}>
            {columns.map((col) => (
              <TableCell key={col.uid}>
                {col.uid === "actions" ? (
                  <button onClick={() => handleAddProductClick(item.id)} className="bg-slate-500 px-2 py-1 rounded-2xl text-white">
                    {item[col.uid as keyof User]}
                  </button>
                ) : col.uid === "status" ? (
                  <button className={`${item.status == "active" ? "bg-green-500" : "bg-red-500"} px-2 py-1 text-white rounded-2xl`} >
                    {item[col.uid as keyof User]}
                  </button>
                ): (
                  item[col.uid as keyof User]
                )}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
