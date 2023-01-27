interface AnonymousPrivileges {
  sitesCanVisit: string[];
}

interface UserPrivileges extends AnonymousPrivileges {
  sitesCanEdit: string[];
}

interface AdminPrivileges extends UserPrivileges {
  sitesCanDelete: string[];
}

function getRolePrivileges(role: 'admin'): AdminPrivileges;
function getRolePrivileges(role: 'user'): UserPrivileges;
function getRolePrivileges(role: string): AnonymousPrivileges;
function getRolePrivileges(
  role: string
): AnonymousPrivileges | AdminPrivileges | UserPrivileges {
  switch (role) {
    case 'admin':
      return {
        sitesCanDelete: [],
        sitesCanEdit: [],
        sitesCanVisit: [],
      };
    case 'user':
      return {
        sitesCanEdit: [],
        sitesCanVisit: [],
      };
    default:
      return {
        sitesCanVisit: [],
      };
  }
}

const adminPrivileges = getRolePrivileges('admin');

const userPrivileges = getRolePrivileges('user');
const anonymousPrivileges = getRolePrivileges('anonymous');
