import { User } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Globe, Phone } from 'lucide-react';

interface AuthorInfoProps {
  user: User;
}

export function AuthorInfo({ user }: AuthorInfoProps) {
  const initials = user.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
          <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold text-foreground">{user.name}</h3>
          <p className="text-muted-foreground">@{user.username}</p>
          <Badge variant="secondary" className="mt-1">
            {user.company.name}
          </Badge>
        </div>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{user.address.city}, {user.address.zipcode}</span>
        </div>
        
        {user.website && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Globe className="h-4 w-4" />
            <a 
              href={`https://${user.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              {user.website}
            </a>
          </div>
        )}
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{user.phone}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-sm italic text-muted-foreground">
          "{user.company.catchPhrase}"
        </p>
      </div>
    </div>
  );
}