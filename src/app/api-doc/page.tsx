import { getApiDocs } from '@/app/lib/swagger';
import ReactSwagger from './react-swagger';

//https://github.com/lukeautry/tsoa/issues/660

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}