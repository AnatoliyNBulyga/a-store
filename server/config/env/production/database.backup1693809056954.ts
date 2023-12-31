export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'postgres'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'a-store'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', 'root'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
