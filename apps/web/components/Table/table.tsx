import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { columns, users } from "./data"; // Import data from data.ts
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

  const handleSortChange = (column: string) => {
    setIsLoading(true);
    if (sortKey === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(column);
      setSortDirection("asc");
    }
    setIsLoading(false);
  };

  const handleAddProductClick = (id: string) => {
    window.open(`/shop/uploadProduct/${id}`, "_blank");
  };

  // Sort function based on column and direction
  const sorted = sellerProfile.shops
    ? [...sellerProfile.shops].sort((a, b) => {
        if (!sortKey) return 0; // If no sorting key, do not sort

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
        table: "min-h-[400px]",
        wrapper: "p-12 border-box bg-white rounded-2xl",
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
                    className="bg-yellow-500 px-2 py-1 rounded-2xl text-white"
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
