import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

// Word Search Component
interface WordSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const WordSearch = ({
  value,
  onChange,
  placeholder = "Search...",
}: WordSearchProps) => {
  return (
    <div className="relative">
      <SearchIcon className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        className="max-w-62.5 bg-background shadow-none border-border pl-9"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

// Word Pagination Component
interface WordPaginationProps {
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export const WordPagination = ({
  page,
  totalPage,
  onPageChange,
  disabled,
}: WordPaginationProps) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <div className="flex-1 text-sm text-muted-foreground">
        Page {page} of {totalPage || 1}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          disabled={page === 1 || disabled}
          variant={"outline"}
          size={"sm"}
          onClick={() => {
            onPageChange(Math.max(1, page - 1));
          }}
        >
          Previous
        </Button>
        <Button
          disabled={page === totalPage || totalPage === 0 || disabled}
          variant={"outline"}
          size={"sm"}
          onClick={() => {
            onPageChange(Math.min(totalPage, page + 1));
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

// Word Header Component
interface WordHeaderProps {
  title: string;
  description?: string;
}

export const WordHeader = ({ title, description }: WordHeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl sm:text-4xl font-bold text-blue-600">{title}</h1>
      {description && (
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  );
};

// Word Container Component
interface WordContainerProps {
  header?: React.ReactNode;
  search?: React.ReactNode;
  pagination?: React.ReactNode;
  children: React.ReactNode;
}

export const WordContainer = ({
  header,
  search,
  pagination,
  children,
}: WordContainerProps) => {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <div className="p-4 sm:p-8 space-y-6">
        {header && <div>{header}</div>}

        {search && (
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1" />
            {search}
          </div>
        )}

        <div>{children}</div>

        {pagination && <div>{pagination}</div>}
      </div>
    </div>
  );
};
