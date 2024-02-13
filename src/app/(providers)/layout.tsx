import { ReduxProvider } from "@/redux/store";
import { AuthProvider } from "./_contexts/auth.context";
import { ReactQueryProvider } from "./_contexts/react-query.context";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
