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
import { columns } from "./data"; // Import data from data.ts
import useSellerStore from "../../store/useSellerStore";

interface Shop {
  _id: string;
  name: string;
  status: string;
}

export default function App() {
  const { sellerProfile } = useSellerStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const handleAddProductClick = (id: string) => {
    window.open(`/shop/uploadProduct/${id}`, "_blank");
  };

  // Sort function based on column and direction
  const sorted = sellerProfile.shops
    ? [...sellerProfile.shops].sort((a, b) => {
        if (!sortKey) return 0; 

        const aValue = String(a[sortKey]);
        const bValue = String(b[sortKey]);

        const comparison = aValue.localeCompare(bValue);

        return sortDirection === "asc" ? comparison : -comparison;
      })
    : [];

  return (
    <Table
      aria-label="Example table with client side sorting"
      classNames={{
        table: "min-h-[400px] overflow-scroll",
        wrapper: "p-12 border-box bg-white rounded-2xl my-8",
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
            {col.name}
            {sortKey === col.uid && (
              <span>{sortDirection === "asc" ? "▲" : "▼"}</span>
            )}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody
        items={sorted}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item: any) => (
          <TableRow key={item._id}>
            {columns.map((col) => (
              <TableCell key={col.uid}>
                {col.uid === "actions" ? (
                  <button
                    onClick={() => handleAddProductClick(item._id)}
                    className="bg-gray-400 px-2 py-1 rounded-2xl text-white"
                  >
                    Upload Your Product
                  </button>
                ) : col.uid === "status" ? (
                  <button
                    className={`${item.status == "active" ? "bg-green-500" : "bg-red-500"} px-2 py-1 text-white rounded-2xl`}
                  >
                    {item[col.uid as keyof Shop]}
                  </button>
                ) : (
                  item.shopName
                )}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
