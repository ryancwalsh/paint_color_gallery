// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
// https://stackoverflow.com/a/74080935/470749

import { useEffect, useState } from 'react';

export default function ClientOnly({ children, ...delegated }: any) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
