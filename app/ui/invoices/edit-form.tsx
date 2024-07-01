'use client'
import { useActionState } from "react";
import { InvoiceForm, CustomerField,  } from "@/app/lib/definitions";
import { updateInvoice } from "@/app/lib/actions";
export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState = { message: "", errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);
   
  return <form action={formAction}></form>;
}