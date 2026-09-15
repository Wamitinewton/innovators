export type PaystackTransaction = {
  reference: string;
  status: string;
};

type PaystackNewTransactionOptions = {
  key: string | undefined;
  email: string;
  amount: number;
  currency: string;
  channels: string[];
  onSuccess: (transaction: PaystackTransaction) => void;
  onCancel: () => void;
};

type PaystackPopInstance = {
  newTransaction: (options: PaystackNewTransactionOptions) => void;
};

declare global {
  interface Window {
    PaystackPop?: new () => PaystackPopInstance;
  }
}

export function isPaystackReady(): boolean {
  return typeof window !== "undefined" && typeof window.PaystackPop !== "undefined";
}

export function payWithMpesa({
  email,
  amountKes,
  onSuccess,
  onClose,
  onError,
}: {
  email: string;
  amountKes: number;
  onSuccess: (reference: string) => void;
  onClose: () => void;
  onError: () => void;
}) {
  if (!isPaystackReady()) {
    onError();
    return;
  }

  try {
    const popup = new window.PaystackPop!();
    popup.newTransaction({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email,
      amount: amountKes * 100,
      currency: "KES",
      channels: ["mobile_money"],
      onSuccess: (transaction) => onSuccess(transaction.reference),
      onCancel: onClose,
    });
  } catch {
    onError();
  }
}
