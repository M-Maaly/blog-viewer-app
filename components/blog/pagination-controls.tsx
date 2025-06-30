
'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationControls({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationControlsProps) {
  const generatePageNumbers = (isMobile: boolean = false) => {
    const pages = [];
    const maxPages = isMobile ? 3 : 7; // Show only 3 pages on mobile, 7 on desktop
    
    if (totalPages <= maxPages) {
      // Show all pages if within limit
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (isMobile) {
        // Mobile: Show only current page and maybe one adjacent
        if (currentPage === 1) {
          // At start: show 1, 2, ...
          pages.push(1, 2, 'ellipsis');
        } else if (currentPage === totalPages) {
          // At end: show ..., last-1, last
          pages.push('ellipsis', totalPages - 1, totalPages);
        } else {
          // In middle: show ..., current, ...
          pages.push('ellipsis', currentPage, 'ellipsis');
        }
      } else {
        // Desktop logic (unchanged)
        pages.push(1);

        if (currentPage <= 4) {
          for (let i = 2; i <= Math.min(5, totalPages - 1); i++) {
            pages.push(i);
          }
          if (totalPages > 5) {
            pages.push('ellipsis');
          }
        } else if (currentPage >= totalPages - 3) {
          pages.push('ellipsis');
          for (let i = Math.max(2, totalPages - 4); i <= totalPages - 1; i++) {
            pages.push(i);
          }
        } else {
          pages.push('ellipsis');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
          }
          pages.push('ellipsis');
        }

        if (totalPages > 1) {
          pages.push(totalPages);
        }
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      {/* Desktop Pagination */}
      <div className="hidden sm:block">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                className={currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-accent'}
              />
            </PaginationItem>
            
            {generatePageNumbers(false).map((page, index) => (
              <PaginationItem key={index}>
                {page === 'ellipsis' ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    onClick={() => onPageChange(page as number)}
                    isActive={currentPage === page}
                    className="cursor-pointer hover:bg-accent"
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-accent'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Mobile Pagination */}
      <div className="block sm:hidden w-full">
        <Pagination>
          <PaginationContent className="gap-1">
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                className={` p-3 ${currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-accent'}`}
              >
                <span className="sr-only">Previous</span>
                ‹
              </PaginationPrevious>
            </PaginationItem>
            
            {generatePageNumbers(true).map((page, index) => (
              <PaginationItem key={index}>
                {page === 'ellipsis' ? (
                  <PaginationEllipsis className="h-9 w-9" />
                ) : (
                  <PaginationLink
                    onClick={() => onPageChange(page as number)}
                    isActive={currentPage === page}
                    className="cursor-pointer hover:bg-accent h-9 w-9 p-0"
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                className={`p-3 ${currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-accent'}`}
              >
                <span className="sr-only">Next</span>
                ›
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}