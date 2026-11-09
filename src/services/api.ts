export class ApiClient {
    private readonly headers = {
        Accept: 'application/json'
    };

    private get apiUrl(): string {
        const url = process.env.NEXT_PUBLIC_API_URL;

        if (!url) {
            throw new Error('NEXT_PUBLIC_API_URL is not defined');
        }

        return url.replace(/\/$/, '');
    }

    async get<T>(url: string): Promise<T> {
        const response = await fetch(`${this.apiUrl}${url}`, {
            method: 'GET',
            headers: this.headers
        });

        return this.handleResponse<T>(response);
    }

    async post<T>(url: string, body?: unknown): Promise<T> {
        const response = await fetch(`${this.apiUrl}${url}`, {
            method: 'POST',
            headers: {
                ...this.headers,
                'Content-Type': 'application/json'
            },
            body: body !== undefined ? JSON.stringify(body) : undefined
        });

        return this.handleResponse<T>(response);
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        const text = await response.text();

        let data: unknown;

        if (text) {
            try {
                data = JSON.parse(text);
            } catch {
                data = text;
            }
        }

        if (!response.ok) {
            const message =
                typeof data === 'object' && data !== null && 'message' in data
                    ? data.message
                    : undefined;

            const errorMessage = Array.isArray(message)
                ? message.join(', ')
                : typeof message === 'string'
                    ? message
                    : `Request failed with status ${response.status}`;

            throw new Error(errorMessage);
        }

        return data as T;
    }
}
